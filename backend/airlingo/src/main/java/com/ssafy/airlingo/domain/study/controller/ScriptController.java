package com.ssafy.airlingo.domain.study.controller;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.airlingo.domain.study.service.ScriptService;
import com.ssafy.airlingo.global.response.ListResponseResult;
import com.ssafy.airlingo.global.response.ResponseResult;
import com.ssafy.airlingo.global.response.SingleResponseResult;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@ApiResponses({
	@ApiResponse(responseCode = "200", description = "응답이 성공적으로 반환되었습니다."),
	@ApiResponse(responseCode = "400", description = "응답이 실패하였습니다.",
		content = @Content(schema = @Schema(implementation = ResponseResult.class)))})
@Tag(name = "Script Controller", description = "스크립트 관련 컨트롤러")
@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/script")
public class ScriptController {

	private final ScriptService scriptService;

	@Operation(summary = "GetAllScriptsByUserId", description = "사용자 아이디 별 전체 스크립트 리스트 조회")
	@GetMapping("/user/{userId}")
	public ResponseResult getScriptListByUserId(@PathVariable Long userId) {
		log.info("ScriptController_getScriptListByUserId");
		return new ListResponseResult<>(scriptService.findScriptByUserId(userId));
	}

	@Operation(summary = "GetAllScriptsByUserIdAndDate", description = "사용자 아이디와 날짜별로 스크립트 리스트 조회")
	@GetMapping("/user/{userId}/date")
	public ResponseResult getScriptListByUserIdAndDate(@PathVariable Long userId,
		@RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate date) {
		log.info("ScriptController_GetAllScriptsByUserIdAndDate");
		return new ListResponseResult<>(scriptService.findScriptByUserIdAndDate(userId, date));
	}

	@Operation(summary = "GetScriptByScriptId", description = "스크립트 아이디로 스크립트 상세 정보 조회")
	@GetMapping("/{scriptId}")
	public ResponseResult getScriptById(@PathVariable Long scriptId) {
		log.info("ScriptController_getScriptById");
		return new SingleResponseResult<>(scriptService.findScriptByScriptId(scriptId));
	}

	@Operation(summary = "DeleteScriptByScriptId", description = "스크립트 아이디로 스크립트 삭제")
	@DeleteMapping("/{scriptId}")
	public ResponseResult deleteScriptById(@PathVariable Long scriptId) {
		log.info("ScriptController_deleteScriptById");
		scriptService.deleteScriptById(scriptId);
		return ResponseResult.successResponse;
	}
}