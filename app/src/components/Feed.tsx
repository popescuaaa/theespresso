import { StyleSheet, Text, View, ActivityIndicator, FlatList, SafeAreaView } from "react-native";
import useEconomistArticles, {Article as ArticleType} from "../hooks/useEconomistArticles";
import React from "react";
import Article from "./Article";

import { Divider } from 'react-native-paper';


export default function Feed() {
    const [articles, isLoading, error] = useEconomistArticles();

    return (
        <View style={styles.container}>

            {!isLoading && !error && articles &&
                <SafeAreaView>

                    {!isLoading && !error && articles &&
                        <View style={styles.flatListContainer}>
                            <FlatList
                                data={articles.splice(1, articles.length - 1)}
                                renderItem={({ item }) => <Article {...item} />}
                                keyExtractor={(item: ArticleType) => item.id.toString()}
                                ItemSeparatorComponent={() => <Divider style={styles.divider} />}
                            />
                        </View>
                    }

                </SafeAreaView>}

            {isLoading &&
                <View>
                    <Text style={styles.loading}>Loading...</Text>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>}
            {error && <Text style={styles.loading}>{error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loading: {
        fontSize: 18,
        color: "#000",
        textAlign: "center",
    },
    article: {
        width: "100%",
        height: 500,
        padding: 10,
    },
    button: {
        position: "absolute",
        bottom: 10,
        right: 10,
        width: 100,
        height: 50,
    },
    logo: {
        width: 30,
        height: 30,
    },
    header: {
        marginTop: "40%",
        marginBottom: "5%",
        width: "100%",
        textAlign: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#000",
        backgroundColor: "rgb(227, 18, 11)"

    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff"
    },
    strong: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#000",
    },
    content: {
        fontSize: 14,
        color: "#000",
    },
    list: {
        width: "100%",
        height: "100%",
    },
    motto: {
        fontSize: 14,
        color: "#000",
        textAlign: "left",
        marginBottom: "5%",
    },
    copy: {
        fontSize: 14,
        color: "#000",
        textAlign: "left",
        marginTop: "5%",
    },
    divider: {
        height: 10,
        backgroundColor: "#fff"
    },
    flatListContainer: {
        width: "100%",
        height: "100%",
        padding: "10%",
    },
});
