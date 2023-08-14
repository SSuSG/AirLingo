import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as Icons from "@/assets/icons";
// import Play from "@/public/output";
import Dropdown from "@/components/common/dropdown";
import theme from "@/assets/styles/Theme";
import { TextInput } from "@/components/common/input";
import { TextButton } from "@/components/common/button";
import Container from "@/components/common/container";
import { getTranslateResult, getLanguage, postWord, getTTS } from "@/api";
import { formatLanguage } from "@/utils/format";
import { selectUser } from "@/features/User/UserSlice";
import { selectMeeting } from "@/features/Meeting/MeetingSlice";
import { translatorConfig, ttsConfig } from "@/config";
import { ReactComponent as ModifyIcon } from "@/assets/icons/modify-icon.svg";
import Modal from "@/components/modal";
// import getSearchResult from "@/api/dictionary";
// import { dictConfig } from "@/config";

// ----------------------------------------------------------------------------------------------------

const { distinctgray } = theme.colors;

// ----------------------------------------------------------------------------------------------------

function MeetingDictionary() {
    const { userNativeLanguage, userId } = useSelector(selectUser);
    const { otherUser } = useSelector(selectMeeting);
    const [languageList, setLanguageList] = useState([]);
    const [sourceLang, setSourceLang] = useState(formatLanguage(userNativeLanguage));
    const [targetLang, setTargetLang] = useState(formatLanguage(otherUser.userNativeLanguage));
    const [word, setWord] = useState("");
    const [translateWord, setTranslateWord] = useState("");
    const [translateResult, setTranslateResult] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        async function fetchLanguageData() {
            await getLanguage({
                responseFunc: {
                    200: (response) =>
                        setLanguageList(
                            response.data.data.map((language) => formatLanguage(language)),
                        ),
                    400: (response) => console.log(response),
                },
            });
        }
        fetchLanguageData();
    }, []);

    const searchWord = () => {
        async function fetchSearchResult() {
            await getTranslateResult({
                responseFunc: {
                    200: (response) => {
                        setTranslateWord(word);
                        setTranslateResult(response.data.data.toLowerCase());
                    },
                    400: (response) => console.log(response),
                },
                data: {
                    source: translatorConfig[sourceLang.id],
                    target: translatorConfig[targetLang.id],
                    text: word,
                },
            });
        }
        fetchSearchResult();
    };

    const saveWord = async () => {
        await postWord({
            responseFunc: {
                200: (response) => {
                    console.log(response);
                    setModalOpen(true);
                },
                400: (response) => console.log(response),
            },
            data: {
                wordName: word,
                wordDescription: translateResult,
                userId,
            },
        });
    };

    const playTTS = async () => {
        try {
            const response = await getTTS({
                data: {
                    target: ttsConfig[targetLang.id],
                    text: translateResult,
                },
            }); // getTTS 함수에서 응답 받음
            console.log(response, 1);
            if (response && response.status === 200) {
                const audioBlob = new Blob([response.data], { type: "audio/mpeg" });
                const audioUrl = URL.createObjectURL(audioBlob);

                // audio 엘리먼트 생성 및 재생
                const audioElement = new Audio(audioUrl);
                audioElement.play();

                // 재생이 끝나면 playing 상태 복원
                audioElement.addEventListener("ended", () => {
                    setPlaying(false);
                });
            } else {
                console.error("Error playing TTS:", response); // 에러 응답 처리
                setPlaying(false);
            }
        } catch (error) {
            console.error("Error playing TTS:", error);
            setPlaying(false);
        }
    };

    return (
        <DictionaryContainer>
            {modalOpen && (
                <Modal title="단어 저장" modalOpen={modalOpen} Icon={ModifyIcon}>
                    <ModalTextBox>
                        <ModalTextWrapper>{translateResult}을(를) 저장하였습니다.</ModalTextWrapper>
                    </ModalTextBox>
                    <ModalButtonBox>
                        <TextButton
                            shape="positive-curved"
                            text="확인"
                            onClick={() => setModalOpen(false)}
                        />
                    </ModalButtonBox>
                </Modal>
            )}
            <ItemBox>
                <SubTitleWrapper>사전 언어 설정</SubTitleWrapper>
                <SettingBox>
                    <Dropdown
                        width="175px"
                        data={languageList.filter((language) => language.id !== targetLang.id)}
                        iconColor="primary"
                        shape="negative"
                        selectedOption={sourceLang}
                        onChange={setSourceLang}
                    />
                    <Icons.RightArrowIcon width="25" height="25" />
                    <Dropdown
                        width="175px"
                        data={languageList.filter((language) => language.id !== sourceLang.id)}
                        iconColor="primary"
                        shape="negative"
                        selectedOption={targetLang}
                        onChange={setTargetLang}
                    />
                </SettingBox>
            </ItemBox>
            <DivisionLine />
            <ItemBox>
                <SubTitleWrapper>검색어</SubTitleWrapper>
                <SearchBox>
                    <TextInput
                        placeholder="찾아볼 단어를 입력하세요!"
                        radius="big"
                        width="70%"
                        value={word.trim()}
                        onChange={(event) => setWord(event.target.value)}
                    />
                    <TextButton text="찾기" width="20%" onClick={searchWord} />
                </SearchBox>
            </ItemBox>
            <DivisionLine />
            <ItemBox>
                <SubTitleWrapper>검색 결과</SubTitleWrapper>
                <Container width="100%" height="300px">
                    <TitleWrapper>{translateWord}</TitleWrapper>
                    <TranslateResultWrapper>{translateResult}</TranslateResultWrapper>
                </Container>
            </ItemBox>
            <TextButton text="단어장 저장" width="40%" onClick={saveWord} />
            <TextButton text="발음 듣기" width="40%" onClick={playTTS} disabled={playing} />
        </DictionaryContainer>
    );
}

// ----------------------------------------------------------------------------------------------------

const DictionaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const ModalTextBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ModalTextWrapper = styled.span`
    color: ${({ color }) => color};
    text-align: center;
    font-size: 25px;
    font-weight: 400;
    line-height: 44px;
`;

const ModalButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding-top: 10px;
`;

const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 95%;
`;

const SubTitleWrapper = styled.div`
    margin-bottom: 15px;
    font-size: 25px;
    font-weight: 700;
    color: ${distinctgray};
    text-align: center;
`;

const SettingBox = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 1;
`;

const SearchBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const DivisionLine = styled.div`
    width: 95%;
    height: 2px;
    background-color: ${distinctgray};
    border-radius: 50px;
    opacity: 0.35;
`;

const TitleWrapper = styled.div`
    color: #000;
    display: flex;
    display: center;
    align-items: center;
    font-size: 40px;
    font-weight: 700;
    padding-top: 70px;
`;

const TranslateResultWrapper = styled.div`
    color: #000;
    font-size: 50px;
    font-weight: 700;
    display: center;
    align-items: center;
    padding-left: 5px;
    padding-top: 10px;
`;

// ----------------------------------------------------------------------------------------------------

export default MeetingDictionary;
