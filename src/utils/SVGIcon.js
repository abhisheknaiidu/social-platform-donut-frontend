import React from "react";
import "./SVGIcon.scss";
import PropTypes from "prop-types";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const getViewBox = (name) => {
  switch (name) {
    case "Dashboard":
      return "0 0 18 18";
    case "Pinned Posts":
      return "0 0 21 20";
    case "Organization":
      return "0 0 20 20";
    case "Account":
      return "0 0 18 18";
    case "Settings":
      return "0 0 20 20";
    case "Event":
      return "0 0 18 20";
    case "Project":
      return "0 0 18 20";
    case "Github":
      return "0 0 438.549 438.549";
    case "Google":
      return "0 0 512 512";
    case "Events":
      return "0 0 20 20";
    case "Projects":
      return "0 0 18 18";
    case "Org settings":
      return "0 0 18 18";
    default:
      return "0 0 32 32";
  }
};

const getPath = (name, props) => {
  switch (name) {
    case "Dashboard":
      return (
        <path
          d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z"
          fill={props.fill}
          fill-opacity="0.5"
          className="path-name"
        />
      );
    case "Pinned Posts":
      return (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.8043 2.15521C16.2894 -0.592583 11.974 -0.725094 9.18483 1.82775C7.01728 3.81162 6.38726 6.85162 7.38933 9.39879L0.51388 16.6358L0.512961 16.6368C-0.117421 17.2947 -0.192773 18.2877 0.432155 18.9705C1.05658 19.6528 2.05245 19.6667 2.76255 19.0979L2.76367 19.097L10.5848 12.8875C13.0327 14.1087 16.1146 13.7488 18.2809 11.766C21.0701 9.2132 21.3195 4.90328 18.8043 2.15521ZM7.42991 7.18208C7.35949 5.37255 8.06656 3.5292 9.52241 2.19672C12.1156 -0.176716 16.1139 -0.0435814 18.4355 2.49291C19.2794 3.415 19.7875 4.52965 19.9677 5.68903C19.7875 4.52961 19.2795 3.41491 18.4355 2.49279C16.1139 -0.0437087 12.1156 -0.176843 9.52241 2.19659C8.06652 3.52911 7.35946 5.37251 7.42991 7.18208ZM0.501346 17.816C0.514476 17.5229 0.639746 17.227 0.874681 16.9821L7.97743 9.50584C7.97741 9.50581 7.9774 9.50578 7.97739 9.50575L0.874675 16.982C0.639707 17.2269 0.514446 17.5229 0.501346 17.816ZM1.3888 18.0951C1.55829 18.2802 1.80082 18.2289 1.96635 18.0964L9.84292 11.8427C9.791 11.8031 9.74144 11.7605 9.69188 11.7179C9.66833 11.6976 9.64478 11.6774 9.62098 11.6574C9.60059 11.6403 9.57995 11.6236 9.55931 11.6068C9.52355 11.5778 9.48777 11.5488 9.4532 11.5178C9.3222 11.3994 9.1965 11.2751 9.07586 11.1456C9.06899 11.1384 9.06178 11.1317 9.05458 11.125C9.04631 11.1173 9.03805 11.1096 9.03031 11.1012C9.02259 11.0927 9.01559 11.0837 9.00855 11.0747C9.00146 11.0656 8.99433 11.0565 8.9864 11.0479C8.86967 10.9174 8.75826 10.7832 8.65321 10.6437C8.62465 10.6055 8.59826 10.5664 8.57184 10.5273C8.55857 10.5077 8.5453 10.4881 8.53173 10.4685C8.51389 10.443 8.49568 10.4176 8.47749 10.3923C8.43899 10.3387 8.40052 10.2851 8.36551 10.2296L1.44021 17.5186C1.29214 17.6731 1.21959 17.9102 1.3888 18.0951Z"
          fill={props.fill}
          fill-opacity="0.5"
          className="path-name"
        />
      );
    case "Organization":
      return (
        <path
          d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM2 10C2 9.101 2.156 8.238 2.431 7.431L4 9L6 11V13L8 15L9 16V17.931C5.061 17.436 2 14.072 2 10ZM16.33 14.873C15.677 14.347 14.687 14 14 14V13C14 12.4696 13.7893 11.9609 13.4142 11.5858C13.0391 11.2107 12.5304 11 12 11H8V8C8.53043 8 9.03914 7.78929 9.41421 7.41421C9.78929 7.03914 10 6.53043 10 6V5H11C11.5304 5 12.0391 4.78929 12.4142 4.41421C12.7893 4.03914 13 3.53043 13 3V2.589C15.928 3.778 18 6.65 18 10C17.9998 11.7647 17.4123 13.4791 16.33 14.873Z"
          fill={props.fill}
          fill-opacity="0.5"
          className="path-name"
        />
      );
    case "Account":
      return (
        <path
          d="M4.5 4.5C4.5 6.981 6.519 9 9 9C11.481 9 13.5 6.981 13.5 4.5C13.5 2.019 11.481 0 9 0C6.519 0 4.5 2.019 4.5 4.5ZM17 19H18V18C18 14.141 14.859 11 11 11H7C3.14 11 0 14.141 0 18V19H17Z"
          fill={props.fill}
          fill-opacity="0.5"
          className="path-name"
        />
      );
    case "Settings":
      return (
        <path
          d="M17.4298 10.98C17.4698 10.66 17.4998 10.34 17.4998 10C17.4998 9.66 17.4698 9.34 17.4298 9.02L19.5398 7.37C19.7298 7.22 19.7798 6.95 19.6598 6.73L17.6598 3.27C17.5398 3.05 17.2698 2.97 17.0498 3.05L14.5598 4.05C14.0398 3.65 13.4798 3.32 12.8698 3.07L12.4898 0.42C12.4598 0.18 12.2498 0 11.9998 0H7.99984C7.74984 0 7.53984 0.18 7.50984 0.42L7.12984 3.07C6.51984 3.32 5.95984 3.66 5.43984 4.05L2.94984 3.05C2.71984 2.96 2.45984 3.05 2.33984 3.27L0.339839 6.73C0.209839 6.95 0.26984 7.22 0.45984 7.37L2.56984 9.02C2.52984 9.34 2.49984 9.67 2.49984 10C2.49984 10.33 2.52984 10.66 2.56984 10.98L0.45984 12.63C0.26984 12.78 0.219839 13.05 0.339839 13.27L2.33984 16.73C2.45984 16.95 2.72984 17.03 2.94984 16.95L5.43984 15.95C5.95984 16.35 6.51984 16.68 7.12984 16.93L7.50984 19.58C7.53984 19.82 7.74984 20 7.99984 20H11.9998C12.2498 20 12.4598 19.82 12.4898 19.58L12.8698 16.93C13.4798 16.68 14.0398 16.34 14.5598 15.95L17.0498 16.95C17.2798 17.04 17.5398 16.95 17.6598 16.73L19.6598 13.27C19.7798 13.05 19.7298 12.78 19.5398 12.63L17.4298 10.98ZM9.99984 13.5C8.06984 13.5 6.49984 11.93 6.49984 10C6.49984 8.07 8.06984 6.5 9.99984 6.5C11.9298 6.5 13.4998 8.07 13.4998 10C13.4998 11.93 11.9298 13.5 9.99984 13.5Z"
          fill={props.fill}
          fill-opacity="0.5"
          className="path-name"
        />
      );
    case "Event":
      return (
        <path
          d="M16 2H15V0H13V2H5V0H3V2H2C1.73786 2.00013 1.47833 2.05202 1.2363 2.1527C0.994268 2.25338 0.7745 2.40086 0.589606 2.58668C0.404713 2.77251 0.258334 2.99301 0.15887 3.23554C0.0594061 3.47808 0.00881501 3.73787 0.00999999 4L0 18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16C16.5299 19.9984 17.0377 19.7872 17.4125 19.4125C17.7872 19.0377 17.9984 18.5299 18 18V4C17.9984 3.47005 17.7872 2.96227 17.4125 2.58753C17.0377 2.2128 16.5299 2.00158 16 2ZM16 18H2V8H16V18ZM16 6H2V4H16V6ZM9 11H14V16H9V11Z"
          fill={props.fill}
        />
      );
    case "Project":
      return (
        <path
          d="M16 2H15V0H13V2H5V0H3V2H2C1.73786 2.00013 1.47833 2.05202 1.2363 2.1527C0.994268 2.25338 0.7745 2.40086 0.589606 2.58668C0.404713 2.77251 0.258334 2.99301 0.15887 3.23554C0.0594061 3.47808 0.00881501 3.73787 0.00999999 4L0 18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16C16.5299 19.9984 17.0377 19.7872 17.4125 19.4125C17.7872 19.0377 17.9984 18.5299 18 18V4C17.9984 3.47005 17.7872 2.96227 17.4125 2.58753C17.0377 2.2128 16.5299 2.00158 16 2ZM16 18H2V8H16V18ZM16 6H2V4H16V6ZM9 11H14V16H9V11Z"
          fill={props.fill}
        />
      );
    case "Projects":
      return (
        <path
          d="M17.222,5.041l-4.443-4.414c-0.152-0.151-0.356-0.235-0.571-0.235h-8.86c-0.444,0-0.807,0.361-0.807,0.808v17.602c0,0.448,0.363,0.808,0.807,0.808h13.303c0.448,0,0.808-0.36,0.808-0.808V5.615C17.459,5.399,17.373,5.192,17.222,5.041zM15.843,17.993H4.157V2.007h7.72l3.966,3.942V17.993z"
          fill={props.fill}
          fillOpacity="0.5"
          className="path-name"
        />
      );
    case "Github":
      return (
        <g>
          <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 0 1-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z" />
        </g>
      );
    case "Google":
      return (
        <g fill="none" fillRule="evenodd">
          <path
            d="M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z"
            fill="#4285f4"
          />
          <path
            d="M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15C83.93 439.12 163.74 492 256 492z"
            fill="#34a853"
          />
          <path
            d="M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84v-61.15H45.1C29.12 181.87 20 217.92 20 256s9.12 74.13 25.1 105.99l78.85-61.15z"
            fill="#fbbc05"
          />
          <path
            d="M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20 163.75 20 83.93 72.89 45.1 150.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z"
            fill="#ea4335"
          />
          <path d="M20 20h472v472H20V20z" />
        </g>
      );
    case "Events":
      return (
        <path
          d="M15.94,10.179l-2.437-0.325l1.62-7.379c0.047-0.235-0.132-0.458-0.372-0.458H5.25c-0.241,0-0.42,0.223-0.373,0.458l1.634,7.376L4.06,10.179c-0.312,0.041-0.446,0.425-0.214,0.649l2.864,2.759l-0.724,3.947c-0.058,0.315,0.277,0.554,0.559,0.401l3.457-1.916l3.456,1.916c-0.419-0.238,0.56,0.439,0.56-0.401l-0.725-3.947l2.863-2.759C16.388,10.604,16.254,10.22,15.94,10.179M10.381,2.778h3.902l-1.536,6.977L12.036,9.66l-1.655-3.546V2.778z M5.717,2.778h3.903v3.335L7.965,9.66L7.268,9.753L5.717,2.778zM12.618,13.182c-0.092,0.088-0.134,0.217-0.11,0.343l0.615,3.356l-2.938-1.629c-0.057-0.03-0.122-0.048-0.184-0.048c-0.063,0-0.128,0.018-0.185,0.048l-2.938,1.629l0.616-3.356c0.022-0.126-0.019-0.255-0.11-0.343l-2.441-2.354l3.329-0.441c0.128-0.017,0.24-0.099,0.295-0.215l1.435-3.073l1.435,3.073c0.055,0.116,0.167,0.198,0.294,0.215l3.329,0.441L12.618,13.182z"
          fill={props.fill}
          fillOpacity="0.5"
          className="path-name"
        />
      );
    case "Org settings":
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.50214 0.402641C8.95768 0.140138 9.47421 0.00195312 10 0.00195312C10.5258 0.00195312 11.0424 0.140149 11.4979 0.402673C11.4986 0.403074 11.4993 0.403475 11.5 0.403877L18.5 4.40387C18.9556 4.66692 19.334 5.04515 19.5973 5.50062C19.8606 5.95609 19.9995 6.47279 20 6.99888V15.0009C19.9995 15.527 19.8606 16.0437 19.5973 16.4992C19.334 16.9547 18.9556 17.3329 18.5 17.5959L18.4961 17.5981L11.5 21.5959C11.4994 21.5963 11.4988 21.5966 11.4982 21.597C11.0426 21.8596 10.5259 21.9979 10 21.9979C9.4741 21.9979 8.95745 21.8596 8.50185 21.597C8.50123 21.5966 8.50062 21.5963 8.5 21.5959L1.50386 17.5981L1.5 17.5959C1.04439 17.3329 0.66597 16.9547 0.402692 16.4992C0.139414 16.0437 0.000539601 15.527 0 15.0009V6.99888C0.000539601 6.47279 0.139414 5.95609 0.402692 5.50062C0.66597 5.04515 1.04439 4.66692 1.5 4.40388L1.50386 4.40165L8.50214 0.402641ZM10 2.00195C9.82446 2.00195 9.65202 2.04816 9.5 2.13593L9.49614 2.13815L2.5 6.13593C2.49947 6.13623 2.49895 6.13654 2.49842 6.13684C2.34726 6.22448 2.22169 6.35021 2.13423 6.50151C2.04654 6.65321 2.00025 6.82528 2 7.0005V14.9993C2.00025 15.1745 2.04654 15.3466 2.13423 15.4983C2.22169 15.6496 2.34726 15.7753 2.49842 15.863C2.49895 15.8633 2.49947 15.8636 2.5 15.8639L9.5 19.8639C9.65202 19.9516 9.82446 19.9979 10 19.9979C10.1755 19.9979 10.348 19.9516 10.5 19.8639L10.5039 19.8617L17.5 15.8639C17.5005 15.8636 17.5011 15.8633 17.5016 15.863C17.6527 15.7753 17.7783 15.6496 17.8658 15.4983C17.9535 15.3465 17.9998 15.1742 18 14.9989V7.00093C17.9998 6.82556 17.9535 6.65333 17.8658 6.50151C17.7783 6.35021 17.6527 6.22449 17.5016 6.13685C17.5011 6.13654 17.5005 6.13623 17.5 6.13593L10.5 2.13594C10.348 2.04817 10.1755 2.00195 10 2.00195Z"
            fill="#1A73E8"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.404578 5.45916C0.68112 4.9811 1.29285 4.81773 1.77091 5.09428L10.0002 9.85462L18.2295 5.09428C18.7075 4.81773 19.3193 4.9811 19.5958 5.45916C19.8723 5.93722 19.709 6.54895 19.2309 6.82549L10.5009 11.8755C10.1911 12.0547 9.80923 12.0547 9.49946 11.8755L0.769462 6.82549C0.2914 6.54895 0.128037 5.93722 0.404578 5.45916Z"
            fill="#1A73E8"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 10C10.5523 10 11 10.4477 11 11V21.08C11 21.6323 10.5523 22.08 10 22.08C9.44772 22.08 9 21.6323 9 21.08V11C9 10.4477 9.44772 10 10 10Z"
            fill="black"
            fillOpacity="0.5"
            className="path-name"
          />
        </>
      );
    default:
      return <path />;
  }
};

const SVGIcon = ({
  name = "",
  style = {},
  fill = "black",
  viewBox = "",
  width = "38",
  height = "38",
  xmlns = "http://www.w3.org/2000/svg",
  isMobile = false,
}) => {
  function renderTooltip(props) {
    return (
      <Tooltip id="button-tooltip" {...props}>
        {name}
      </Tooltip>
    );
  }

  return (
    <React.Fragment>
      {isMobile ? (
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <svg
            width={width}
            style={style}
            height={height}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox || getViewBox(name)}
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            {getPath(name, { fill })}
          </svg>
        </OverlayTrigger>
      ) : (
        <svg
          width={width}
          style={style}
          height={height}
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox || getViewBox(name)}
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          {getPath(name, { fill })}
        </svg>
      )}
    </React.Fragment>
  );
};

SVGIcon.prototype = {
  name: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.string,
  style: PropTypes.object,
};

export default SVGIcon;
