import React, { useEffect, useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { BsTypeBold, BsTypeItalic, BsTypeUnderline } from "react-icons/bs";
import { BiFontColor, BiImage, BiSmile } from "react-icons/bi";
import { MdAlternateEmail, MdOutlineWindow } from "react-icons/md";
import { RiDoubleQuotesR } from "react-icons/ri";
import {
  AiOutlineSmallDash,
  AiOutlineMenuUnfold,
  AiOutlineMenu,
} from "react-icons/ai";

import { GiBreakingChain } from "react-icons/gi";
import { FaAngleLeft, FaAngleRight, FaAngleDown } from "react-icons/fa";

function Editor() {
  const [fontsSize, setFontSize] = useState("normal");
  const [textBold, setTextBold] = useState(true);
  const [textItalic, setTextItalic] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let textAreaStyles = {
    fontSize:
      fontsSize === "small" ? "14px" : fontsSize === "normal" ? "24px" : "48px",
    color: selectedColor,
    fontWeight: textBold ? "bold" : "normal",
    fontStyle: textItalic ? "italic" : "normal",
    width: "100%",
    height: "100%",
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  function handleTextChange(event) {
    setText(event.target.value);
  }

  const handleFontSizeChange = (x) => {
    setFontSize(x);
  };

  const handleTextBold = (event) => {
    setTextBold(!textBold);
  };
  const handleTextItalic = (event) => {
    setTextItalic(!textItalic);
  };
  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const commentText = event.target.elements.comment.value;
    if (commentText) {
      setComments([...comments, commentText]);
      event.target.elements.comment.value = "";
    }
    console.log(comments);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "1px",
          margin: "1px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Dropdown>
          <Dropdown.Toggle variant="Light" id="dropdown-basic">
            Normal Text
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleFontSizeChange("small")}>
              Small Text
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFontSizeChange("normal")}>
              Normal Text
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFontSizeChange("large")}>
              Large Text
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <span
          style={{ fontSize: "25px", marginLeft: "1rem", marginRight: "1rem" }}
        >
          |
        </span>

        <Button
          style={{ marginLeft: "2px" }}
          variant="light"
          onClick={() => handleTextBold()}
        >
          <BsTypeBold />
        </Button>
        <Button
          style={{ marginLeft: "2px" }}
          variant="light"
          onClick={() => handleTextItalic()}
        >
          <BsTypeItalic />
        </Button>
        <Button style={{ marginLeft: "2px" }} variant="light">
          <AiOutlineSmallDash />
        </Button>

        <span
          style={{ fontSize: "25px", marginLeft: "1rem", marginRight: "1rem" }}
        >
          |
        </span>

        <Dropdown>
          <Dropdown.Toggle variant="Light" id="dropdown-basic">
            <BiFontColor />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => handleColorChange("#000000")}
              style={{ color: "#000000" }}
            >
              Black
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleColorChange("#ff0000")}
              style={{ color: "#ff0000" }}
            >
              Red
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleColorChange("#00ff00")}
              style={{ color: "#00ff00" }}
            >
              Green
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleColorChange("#0000ff")}
              style={{ color: "#0000ff" }}
            >
              Blue
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleColorChange("#ffff00")}
              style={{ color: "#ffff00" }}
            >
              Yellow
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <span
          style={{ fontSize: "25px", marginLeft: "1rem", marginRight: "1rem" }}
        >
          |
        </span>

        <Button style={{ marginLeft: "2px" }} variant="light">
          <AiOutlineMenuUnfold />
        </Button>
        <Button style={{ marginLeft: "2px" }} variant="light">
          <AiOutlineMenu />
        </Button>

        <span
          style={{ fontSize: "25px", marginLeft: "1rem", marginRight: "1rem" }}
        >
          |
        </span>

        <Button style={{ marginLeft: "2px" }} variant="light">
          <GiBreakingChain />
        </Button>
        <Button style={{ marginLeft: "2px" }} variant="light">
          <BiImage />
        </Button>
        <Button style={{ marginLeft: "2px" }} variant="light">
          <MdAlternateEmail />
        </Button>
        <Button style={{ marginLeft: "2px" }} variant="light">
          <BiSmile />
        </Button>
        <Button style={{ marginLeft: "2px" }} variant="light">
          <MdOutlineWindow />
        </Button>
        <Button style={{ marginLeft: "2px" }} variant="light">
          <RiDoubleQuotesR />
        </Button>
        <Button style={{ marginLeft: "2px" }} variant="light">
          <FaAngleLeft />
          <FaAngleRight />
        </Button>
        <Button
          style={{ marginLeft: "2px", fontWeight: "bold" }}
          variant="light"
          onClick={handleShow}
        >
          Comments <FaAngleDown />
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Comments</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
          </Modal.Body>
        </Modal>
      </div>

      <textarea
        style={textAreaStyles}
        value={text}
        onChange={handleTextChange}
        placeholder="Enter any Text"
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <span>
          <Button style={{ marginLeft: "2px" }} variant="light">
            Character count: {text.length}
          </Button>
          <Button style={{ marginLeft: "2px" }} variant="light">
            Line count: {text.split(/\r\n|\r|\n/).length}
          </Button>
          <Button style={{ marginLeft: "2px" }} variant="light">
            Sentence count: {text.split(/[.?!]\s/).length}
          </Button>
        </span>
        <span style={{ margin: "2px", float: "right" }}>
          <form onSubmit={handleCommentSubmit}>
            <label htmlFor="comment">Comment:</label>
            <input
              id="comment"
              name="comment"
              type="text"
              style={{ width: "35rem" }}
            />
            <button type="submit">Submit</button>
          </form>
        </span>
      </div>
    </>
  );
}

export default Editor;
