import React from 'react';
import {PDFViewer} from "@react-pdf/renderer";
import './style/App.css';
import CVFile from "./components/CVFile";

const App = () => (
// ReactPDF.render(<CVFile/>, `./example.pdf`);

    <PDFViewer>
        <CVFile/>
    </PDFViewer>
);
export default App;