(() => ({
  name: 'text',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { content, visible, font } = options;
    const { useText, env } = B;

    const isDev = env === 'dev';

    const textContent =
      content.length === 0 && isDev ? 'Empty text component' : useText(content);

    const Tag = {
      Title1: 'h1',
      Title2: 'h2',
      Title3: 'h3',
      Title4: 'h4',
      Title5: 'h5',
      Title6: 'h6',
      Body1: 'p',
      Body2: 'p',
    }[font || 'Body1'];

    return visible ? <Tag className={classes.root}>{textContent}</Tag> : <></>;
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {
        color: ({ options: { color, font } }) => {
          if (color !== 'Transparent') {
            return style.getColor(color);
          }
          return style.getFontColor(font);
        },
        fontSize: ({ options: { font } }) => style.getFontSize(font),
        fontFamily: ({ options: { font } }) => style.getFontFamily(font),
        fontWeight: ({ options: { font } }) => style.getFontWeight(font),
        textTransform: ({ options: { font } }) => style.getTextTransform(font),
        letterSpacing: ({ options: { font } }) => style.getLetterSpacing(font),
      },
    };
  },
}))();
