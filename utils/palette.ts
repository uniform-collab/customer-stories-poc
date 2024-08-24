const SKIP_FETCH_COLOR = 'Skip fetch colors from integration in dev mode';

export const generateTailwindcssColorKeysPattern = (colorKeys: string[]) => {
  const prefixes = ['bg', 'text', 'decoration'];
  return {
    pattern: new RegExp(colorKeys.length ? `(${prefixes.join('|')})-(${colorKeys.join('|')})` : ''),
    variants: ['hover', 'dark', 'dark:hover'],
  };
};

export const getRootColorPalette = (palette: Record<string, string>) => {
  const styleContent = Object.entries(palette)
    .map(([key, value]) => `--${key}: ${value};\r\n\t`)
    .join('');

  return styleContent ? `:root {\r\n\t${styleContent}}` : '';
};

export const getColorPaletteStyleTag = (palette: Record<string, string>) => {
  const styleContent = getRootColorPalette(palette);

  return `<style>
     ${styleContent}
    </style>`;
};

export const getRemoteColorPalette = async () => {
  if (process.env.DEV_MODE === 'true') {
    console.info(SKIP_FETCH_COLOR);
    return null;
  }

  if (!process.env.INTEGRATION_URL) {
    throw new Error('No integration URL provided');
  }

  if (!process.env.UNIFORM_PROJECT_ID) {
    throw new Error('No project id provided');
  }

  const pallete = await fetch(
    `${process.env.INTEGRATION_URL}/api/getColors?projectId=${process.env.UNIFORM_PROJECT_ID}`,
    {
      cache: 'no-cache',
    }
  ).then(res => res.json());

  return getColorPaletteStyleTag(pallete);
};
