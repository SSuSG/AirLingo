package com.ssafy.airlingo.domain.study.dto.response;

import java.time.LocalDateTime;
import java.util.List;

import com.ssafy.airlingo.domain.language.dto.response.LanguageDto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Builder
@ToString
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Schema(description = "스터디 정보")
public class StudyResponseDto {

	@Schema(description = "스터디 ID", example = "1")
	private Long studyId;

	@Schema(description = "총 공부 시간", example = "2")
	private int studyTime;

	@Schema(description = "파트너 이름", example = "에어")
	private String partnerNickName;

	@Schema(description = "모국어")
	private LanguageDto nativeLanguageDto;

	@Schema(description = "공부한 언어 이미지 URL", example = "https://airlingobucket.s3.ap-northeast-2.amazonaws.com/flag-britain-icon.svg")
	private String imageUrl;

	@Schema(description = "공부한 언어 - 한국어", example = "영어")
	private String languageKorName;

	@Schema(description = "공부한 언어 - 영어", example = "English")
	private String languageEngName;

	@Schema(description = "공부한 시각", example = "2023-07-31 16:19:27.689513")
	private LocalDateTime createdDate;

	@Schema(description = "종료한 시각", example = "2023-07-31 16:19:27.689513")
	private LocalDateTime modifiedDate;

	@Schema(description = "공부한 스크립트 정보")
	private List<ScriptResponseDto> scripts;
}
