import React from "react";
import Jumbotron from "./jumbotron";
import Card from "./card";

const Container = () =>{
    return(
        <div className="mx-5 mb-5">
            <Jumbotron></Jumbotron>
            <div className="row">
                <Card textCard="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel imperdiet nunc, et vehicula dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce neque tellus, dapibus ac ullamcorper gravida, tincidunt at felis. Proin a felis sit amet ipsum tempus gravida. Aliquam dictum sollicitudin erat, at placerat urna tempor et. Phasellus sollicitudin malesuada libero in vehicula. Nulla facilisi. Etiam sed ligula lectus."></Card>
                <Card textCard="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ac ex velit. Pellentesque id arcu arcu. Praesent pulvinar condimentum ante commodo porttitor. Vivamus mattis ut mauris et placerat."></Card>
                <Card textCard="Probando"></Card>
                <Card></Card>
            </div>
        </div>
    );
};

export default Container;
