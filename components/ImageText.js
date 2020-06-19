import React from "react";
import { View, StyleSheet, Image } from "react-native";
import TitleText from "./TitleText";

const ImageText = (props) => {
	return (
		<View style={{ ...styles.teamInputContainer, ...props.style }}>
			<Image
				source={props.img}
				resizeMode="contain"
				style={styles.image}
			/>
			<TitleText>{props.children}</TitleText>
		</View>
	);
};

const styles = StyleSheet.create({
	teamInputContainer: {
		height: 200,
		width: 200,
		alignItems: "center",
		justifyContent: "center",
	},
	image: { flex: 1 },
});

export default ImageText;
