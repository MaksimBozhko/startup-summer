import { useMantineTheme } from "@mantine/core"

type CustomH2Props = React.ComponentPropsWithoutRef<'h2'>;

export function H4(props: CustomH2Props) {
  const theme = useMantineTheme();
  return (
    <h4
      {...props}
      style={{
        fontSize: theme.headings.sizes.h4.fontSize,
        fontWeight: theme.headings.sizes.h4.fontWeight,
        lineHeight: theme.headings.sizes.h4.lineHeight,
      }}
    />
  );
}