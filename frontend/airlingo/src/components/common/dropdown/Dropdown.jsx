import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import PropTypes from "prop-types";
import theme from "@/assets/styles/Theme";
import { ReactComponent as DropdownIcon } from "@/assets/imgs/icons/right-arrow-icon.svg";
import iconConfig from "@/config";
import combineShape from "@/utils/style";

// ----------------------------------------------------------------------------------------------------

const { primary1, primary4 } = theme.colors;
const shapeStyle = {
    positive: `
        background-color: ${primary4};
        border: none;
        color: #FFFFFF;
    `,
    negative: `
        background-color: #FFFFFF;
        border: 3px solid ${primary4};
        color: ${primary4};
    `,
};
const dropdownOpenAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

// ----------------------------------------------------------------------------------------------------

function Dropdown({
    width = "200px",
    data,
    iconColor,
    shape = "positive",
    defaultOption = null,
    placeholder = "",
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultOption);
    const [iconRotation, setIconRotation] = useState(0);
    const dropdownRef = useRef();

    useEffect(() => {
        setSelectedOption(defaultOption);
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setIconRotation(0);
            }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [defaultOption]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setIconRotation(isOpen ? 0 : 90);
    };

    const handleOptionClick = (id) => {
        const selected = data.find((option) => option.id === id);
        setSelectedOption(selected);
        setIsOpen(false);
        setIconRotation(0);
    };

    return (
        <DropdownWrapper ref={dropdownRef} width={width}>
            <DropdownButton onClick={toggleDropdown} shape={shape}>
                {selectedOption ? (
                    <>
                        <div>
                            <selectedOption.img />
                        </div>
                        <div>{selectedOption.label}</div>
                    </>
                ) : (
                    <div>{placeholder}</div>
                )}
                <DropdownIconWrapper iconColor={iconColor} iconRotation={iconRotation}>
                    <DropdownIcon width="25" height="25" />
                </DropdownIconWrapper>
            </DropdownButton>
            <DropdownContent open={isOpen}>
                {data.map((option) => (
                    <DropdownOption key={option.id} onClick={() => handleOptionClick(option.id)}>
                        <div>
                            <option.img />
                        </div>
                        <div>{option.label}</div>
                    </DropdownOption>
                ))}
            </DropdownContent>
        </DropdownWrapper>
    );
}

const DropdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 120px;
    width: ${({ width }) => width};
    border: none;
    font-size: 20px;
    font-weight: 700;
    gap: 5px;
`;

const DropdownButton = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    align-items: center;
    padding: 0 15px;
    cursor: pointer;
    ${(props) => combineShape(shapeStyle, props.shape)}
`;

const DropdownContent = styled.div`
    overflow: hidden;
    display: ${(props) => (props.open ? "block" : "none")};
    background-color: #ffffff;
    border: 2px solid ${primary4};
    border-radius: 10px;
    animation: ${dropdownOpenAnimation} 0.3s ease-in-out;
`;

const DropdownOption = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    font-weight: 400;
    padding: 15px;
    color: ${primary4};
    &:hover {
        background-color: ${primary1};
        cursor: pointer;
    }
`;

const DropdownIconWrapper = styled.div`
    display: block;
    width: 25px;
    height: 25px;
    transform: rotate(${({ iconRotation }) => iconRotation}deg);
    transition: all 0.2s ease-in-out;
    svg path {
        stroke: ${({ iconColor }) => iconConfig.color[iconColor]};
    }
`;

// ----------------------------------------------------------------------------------------------------

Dropdown.propTypes = {
    width: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            img: PropTypes.node.isRequired,
            label: PropTypes.string.isRequired,
        }),
    ),
    iconColor: PropTypes.string,
    shape: PropTypes.oneOf(["positive", "negative"]),
    defaultOption: PropTypes.shape({
        id: PropTypes.string.isRequired,
        img: PropTypes.node.isRequired,
        label: PropTypes.string.isRequired,
    }),
    placeholder: PropTypes.string,
};

Dropdown.defaultProps = {
    width: "200px",
    data: [],
    iconColor: "black",
    shape: "positive",
    defaultOption: null,
    placeholder: "",
};

// ----------------------------------------------------------------------------------------------------

export default Dropdown;
