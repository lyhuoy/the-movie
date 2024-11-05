import { StyleSheet, View } from 'react-native';

type DottedDividerProps = {
  height?: number;
  borderWidth?: number;
  borderColor?: string;
};

export const DottedDivider: React.FC = ({
  height = 1,
  borderWidth = 1,
  borderColor = '#ddd',
}: DottedDividerProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          height,
        },
      ]}
    >
      <View
        style={[styles.divider, { height, borderWidth, borderColor }]}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  divider: {
    height: 2,
    borderStyle: 'dashed',
  },
});
