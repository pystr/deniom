import React, { Component } from "react";
import Konva from "konva";
import { render } from "react-dom";
import { Stage, Layer, Rect, Text } from "react-konva";

class App extends Component {
  state = {
    newTextObj: {
      textEditVisible: false,
      textX: 0,
      fill: "black",
      textY: 0,
      textValue: "double click to edit\n\nand enter to finish",
      fontSize: 8,
      width: 400,
      fontStyle: "normal",
      align: "left",
      id: 0
    }
  };

  handleTextareaKeyDown = (e) => {
    if (e.keyCode === 13) {
      let { newTextObj } = this.state;

      newTextObj.textEditVisible = false;
      this.setState({
        newTextObj
      });
    }
  };

  handleTextEdit = (e) => {
    let { newTextObj } = this.state;
    newTextObj.textValue = e.target.value;
    this.setState({
      newTextObj
    });
  };

  handleTextDblClick = (e) => {
    const absPos = e.target.getAbsolutePosition();
    let { newTextObj } = this.state;
    newTextObj.textEditVisible = true;
    newTextObj.textX = absPos.x;
    newTextObj.textY = absPos.y;
    this.setState({
      newTextObj
    });
  };
  render() {
    return (
      <div>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Text
              fontSize={20}
              align={"left"}
              fontStyle={20}
              draggable={false}
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan"
              x={0}
              y={10}
              wrap="word"
              width={200}
              //onDblClick={e => this.handleTextDblClick(e)}
            />
          </Layer>
          <Layer>
            <Text
              fontSize={14}
              align={"left"}
              fontStyle={20}
              draggable={false}
              text="1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan"
              x={100}
              y={200}
              wrap="word"
              width={200}
              //onDblClick={e => this.handleTextDblClick(e)}
            />
          </Layer>
        </Stage>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
