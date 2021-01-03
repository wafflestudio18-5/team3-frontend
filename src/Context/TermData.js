import React, { useState, useContext, createContext } from "react";
import { useHistory } from "react-router-dom";
const defaultList = {
  terms: [
    {
      label: "서비스이용약관 동의 (필수)",
      contents: [
        {
          head: "제1조 (목적)",
          content:
            "에브리타임 서비스 이용약관은 회사가 서비스를 제공함에 있어, 회사와 이용자 간의 권리, 의무 및 책임 사항 등을 규정함을 목적으로 합니다.",
        },
        {
          head: "제2조 (정의)",
          content:
            "에브리타임 서비스 이용약관은 회사가 서비스를 제공함에 있어, 회사와 이용자 간의 권리, 의무 및 책임 사항 등을 규정함을 목적으로 합니다.",
        },
      ],
    },
    {
      label: "개인정보처리방침 동의 (필수)",
      contents: [
        {
          head: "",
          content:
            "개인정보 처리방침은 회사가 서비스를 제공함에 있어, 개인정보를 어떻게 수집·이용·보관·파기하는지에 대한 정보를 담은 방침을 의미합니다. 개인정보 처리방침은 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 국내 개인정보 보호 법령을 모두 준수하고 있습니다. 이 약관의 정의는 서비스 이용약관을 따릅니다.",
        },
      ],
    },
    {
      label: "커뮤니티이용규칙 동의 (필수)",
      contents: [
        {
          head: "커뮤니티 이용 규칙",
          content:
            "에브리타임 서비스 이용약관은 회사가 서비스를 제공함에 있어, 회사와 이용자 간의 권리, 의무 및 책임 사항 등을 규정함을 목적으로 합니다.",
        },
        {
          head: "신고처리 시스템",
          content:
            "모든 게시물은 이용자의 신고를 기반으로 하는 신고처리 시스템을 통해 처리됩니다. 커뮤니티 이용규칙에 어긋난다고 판단되는 글, 댓글, 게시판, 1:1 대화를 발견하셨을 경우, 신고 버튼을 눌러 신고해주시기 바랍니다. 서비스 이용약관은 회사가 서비스를 제공함에 있어, 회사와 이용자 간의 권리, 의무 및 책임 사항 등을 규정함을 목적으로 합니다.",
        },
      ],
    },
    {
      label: "광고성 정보 수신 동의 (선택)",
      contents: [
        {
          head: "제1조 (목적)",
          content:
            "에브리타임 서비스 이용약관은 회사가 서비스를 제공함에 있어, 회사와 이용자 간의 권리, 의무 및 책임 사항 등을 규정함을 목적으로 합니다.",
        },
        {
          head: "제2조 (정의)",
          content:
            "에브리타임 서비스 이용약관은 회사가 서비스를 제공함에 있어, 회사와 이용자 간의 권리, 의무 및 책임 사항 등을 규정함을 목적으로 합니다.",
        },
      ],
    },
    {
      label: "본인 명의를 이용하여 가입을 진행하겠습니다.",
      contents: [
        {
          head: "부모님, 친구 등 타인의 명의로 가입할 수 없습니다.",
          content:
            "에브리타임은 철저한 학교 인증과 안전한 익명 커뮤니티를 제공하기 위해, 가입 시 본인 인증 수단을 통해 본인 여부를 확인하고, 커뮤니티 이용 시 증명 자료 제출을 통해 재학 여부를 확인합니다. 두 정보가 일치하지 않을 경우 서비스를 이용하실 수 없습니다.",
        },
      ],
    },
    {
      label: "만 14세 이상입니다.",
      contents: [
        {
          head: "",
          content:
            "에브리타임은 국내 대학생을 위한 서비스이며, 본인 인증을 통해 만 14세 이상만 가입할 수 있습니다.",
        },
      ],
    },
  ],
  checkAll: () => {},
  checkTerm: () => {},
  checked: [],
  onCertificateClick: () => {},
};

const TermContext = createContext(defaultList);

const TermProvider = ({ children }) => {
  const history = useHistory();
  const checkAll = () => {
    setState((state) => ({
      ...state,
      checked: state.checked.map((term, index) => {
        return index < 4 ? true : term;
      }),
    }));
  };

  const checkTerm = (n) => {
    setState((state) => ({
      ...state,
      checked: state.checked.map((term, index) => {
        return index === n ? !term : term;
      }),
    }));
  };

  const onCertificateClick = (checked) => {
    if (checked.find((i) => i === false) !== undefined) {
      alert("서비스 이용 약관에 동의해주세요");
      return;
    }
    history.push("./info");
  };

  const checked = new Array(6).fill(false);

  const termState = {
    ...defaultList,
    checkAll,
    checkTerm,
    onCertificateClick,
    checked,
  };

  const [state, setState] = useState(termState);

  return <TermContext.Provider value={state}>{children}</TermContext.Provider>;
};

const useTermContext = () => useContext(TermContext);

export { useTermContext, TermProvider };
