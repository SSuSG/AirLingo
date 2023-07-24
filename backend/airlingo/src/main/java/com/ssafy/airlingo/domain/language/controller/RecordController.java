package com.ssafy.airlingo.domain.language.controller;

import com.ssafy.airlingo.domain.language.dto.request.EvaluateUserRequestDto;
import com.ssafy.airlingo.domain.language.service.RecordService;
import com.ssafy.airlingo.global.response.ListResponseResult;
import com.ssafy.airlingo.global.response.ResponseResult;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@ApiResponses({
        @ApiResponse(responseCode = "200", description = "응답이 성공적으로 반환되었습니다."),
        @ApiResponse(responseCode = "400", description = "응답이 실패하였습니다.",
                content = @Content(schema = @Schema(implementation = ResponseResult.class)))})
@Tag(name = "Record Controller", description = "실력 평가 관련 컨트롤러")
@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api")
public class RecordController {

    private final RecordService recordService;

    @Operation(summary = "Evaluate User", description = "대화 상대방 실력,매너 평가")
    @PostMapping("/record")
    public ResponseResult evaluateUser(@Valid @RequestBody EvaluateUserRequestDto evaluateUserRequestDto) {
        log.info("RecordController_evaluateUser");
        if(recordService.evaluateUser(evaluateUserRequestDto))
            return ResponseResult.successResponse;
        return ResponseResult.failResponse;
    }

}