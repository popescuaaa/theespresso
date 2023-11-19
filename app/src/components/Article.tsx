import { useState } from "react";
import { Card, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Article as ArticleType } from "../hooks/useEconomistArticles";

const DEFAULT_TITLE = "The economist news";
const DEFAULT_TOPIC = "The economist news";

const Article = (item: ArticleType): JSX.Element => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { title, content } = item;

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <Card mode="elevated" onPress={toggleExpand} style={styles.card}>
            <Card.Title title={title.length === 0 ? DEFAULT_TITLE : title} />            
            <Card.Content>
                <Text variant="titleSmall">Topic: {title.length === 0 ? DEFAULT_TOPIC : title}</Text>
                {isExpanded && <Text variant="bodyMedium">{content}</Text>}
            </Card.Content>
         </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        padding: 10,
        backgroundColor: "#fff9c4",
    },
});

export default Article;