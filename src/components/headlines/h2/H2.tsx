import { useMantineTheme } from "@mantine/core"

type CustomH2Props = React.ComponentPropsWithoutRef<'h2'>;

export function H2(props: CustomH2Props) {
  const theme = useMantineTheme();
  return (
    <h2
      {...props}
      style={{
        fontSize: theme.headings.sizes.h2.fontSize,
        fontWeight: theme.headings.sizes.h2.fontWeight,
        lineHeight: theme.headings.sizes.h2.lineHeight,
      }}
    />
  );
}