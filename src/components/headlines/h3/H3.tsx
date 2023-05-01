import { useMantineTheme } from "@mantine/core"

type CustomH2Props = React.ComponentPropsWithoutRef<'h2'>;

export function H3(props: CustomH2Props) {
  const theme = useMantineTheme();
  return (
    <h3
      {...props}
      style={{
        fontSize: theme.headings.sizes.h3.fontSize,
        fontWeight: theme.headings.sizes.h3.fontWeight,
        lineHeight: theme.headings.sizes.h3.lineHeight,
      }}
    />
  );
}