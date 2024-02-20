import React from 'react';
import {Document, Page, Text, View} from "@react-pdf/renderer";
import styles from "../style/cv_styles_sheet";

const CVFile = () => {
    return (
        <Document>
            <Page size="A4" style={styles.body}>
                <View>
                    <Text style={styles.title} fixed>
                        ma nishma
                    </Text>
                </View>
                <Text style={styles.text}>
                    ma nishma
                </Text>
            </Page>
        </Document>
    )
};

export default CVFile;