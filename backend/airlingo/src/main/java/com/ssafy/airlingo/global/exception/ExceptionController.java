package com.ssafy.airlingo.global.exception;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.ssafy.airlingo.global.response.ResponseResult;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@RestControllerAdvice(basePackages = "com.ssafy.airlingo")
public class ExceptionController {

	@ExceptionHandler(IncorrectLanguageCodeException.class)
	public ResponseResult incorrectLanguageCodeException(IncorrectLanguageCodeException err) {
		log.info("Error : {}", err.getClass());
		log.info("Error Message : {}", err.getMessage());
		return ResponseResult.exceptionResponse(ExceptionCode.INCORRECT_LANGUAGE_CODE_EXCEPTION);
	}

	@ExceptionHandler(NotExistWordException.class)
	public ResponseResult notExistWordException(NotExistWordException err) {
		log.info("Error : {}", err.getClass());
		log.info("Error Message : {}", err.getMessage());
		return ResponseResult.exceptionResponse(ExceptionCode.NOT_EXIST_WORD_EXCEPTION);
	}

	@ExceptionHandler(NotExistAccountException.class)
	public ResponseResult notExistAccountException(NotExistAccountException err) {
		log.info("Error : {}", err.getClass());
		log.info("Error Message : {}", err.getMessage());
		return ResponseResult.exceptionResponse(ExceptionCode.NOT_EXIST_ACCOUNT_EXCEPTION);
	}

	@ExceptionHandler(NotFoundLanguageException.class)
	public ResponseResult notFoundLanguageException(NotFoundLanguageException err) {
		log.info("Error : {}", err.getClass());
		log.info("Error Message : {}", err.getMessage());
		return ResponseResult.exceptionResponse(ExceptionCode.NOT_FOUND_LANGUAGE_EXCEPTION);
	}

	@ExceptionHandler(NotFoundGradeException.class)
	public ResponseResult notFoundGradeException(NotFoundGradeException err) {
		log.info("Error : {}", err.getClass());
		log.info("Error Message : {}", err.getMessage());
		return ResponseResult.exceptionResponse(ExceptionCode.NOT_FOUND_GRADE_EXCEPTION);
	}

	@ExceptionHandler(EmptyWordListException.class)
	public ResponseResult emptyWordListException(EmptyWordListException err) {
		log.info("Error : {}", err.getClass());
		log.info("Error Message : {}", err.getMessage());
		return ResponseResult.exceptionResponse(ExceptionCode.EMPTY_WORD_LIST_EXCEPTION);
	}

	@ExceptionHandler(ExpiredRefreshTokenException.class)
	public ResponseResult expiredRefreshTokenException(ExpiredRefreshTokenException err) {
		log.info("Error : {}", err.getClass());
		log.info("Error Message : {}", err.getMessage());
		return ResponseResult.exceptionResponse(ExceptionCode.EXPIRED_REFRESH_TOKEN_EXCEPTION);
	}

	@ExceptionHandler(EmptyStudyListException.class)
	public ResponseResult emptyStudyListException(EmptyStudyListException err) {
		log.info("Error : {}", err.getClass());
		log.info("Error Message : {}", err.getMessage());
		return ResponseResult.exceptionResponse(ExceptionCode.EMPTY_STUDY_LIST_EXCEPTION);
	}

	@ExceptionHandler(EmptyImageException.class)
	public ResponseResult emptyImageException(EmptyImageException err) {
		log.info("Error : {}", err.getClass());
		log.info("Error Message : {}", err.getMessage());
		return ResponseResult.exceptionResponse(ExceptionCode.EMPTY_IMAGE_EXCEPTION);
	}

	@ExceptionHandler(NotExistScriptException.class)
	public ResponseResult notExistScriptException(NotExistScriptException err) {
		log.info("Error : {}", err.getClass());
		log.info("Error Message : {}", err.getMessage());
		return ResponseResult.exceptionResponse(ExceptionCode.NOT_EXIST_SCRIPT_EXCEPTION);
	}

	@ExceptionHandler(NotEnoughMileageException.class)
	public ResponseResult notEnoughMileageException(NotEnoughMileageException err) {
		log.info("Error : {}", err.getClass());
		log.info("Error Message : {}", err.getMessage());
		return ResponseResult.customExceptionResponse(ExceptionCode.NOT_ENOUGH_MILEAGE_EXCEPTION, err.getMessage());
	}

	@ExceptionHandler(ExistLoginIdException.class)
	public ResponseResult ExistLoginIdException(ExistLoginIdException err) {
		log.info("Error : {}", err.getClass());
		log.info("Error Message : {}", err.getMessage());
		return ResponseResult.customExceptionResponse(ExceptionCode.EXIST_LOGINID_EXCEPTION, err.getMessage());
	}

	@ExceptionHandler(ExistEmailException.class)
	public ResponseResult ExistEmailException(ExistEmailException err) {
		log.info("Error : {}", err.getClass());
		log.info("Error Message : {}", err.getMessage());
		return ResponseResult.customExceptionResponse(ExceptionCode.EXIST_EMAIL_EXCEPTION, err.getMessage());
	}

	@ExceptionHandler(ExistNicknameException.class)
	public ResponseResult ExistNicknameException(ExistNicknameException err) {
		log.info("Error : {}", err.getClass());
		log.info("Error Message : {}", err.getMessage());
		return ResponseResult.customExceptionResponse(ExceptionCode.EXIST_NICKNAME_EXCEPTION, err.getMessage());
	}

	@ExceptionHandler(InvalidAccessTokenException.class)
	public ResponseResult invalidAccessTokenException(InvalidAccessTokenException err) {
		log.info("Error : {}", err.getClass());
		log.info("Error Message : {}", err.getMessage());
		return ResponseResult.customExceptionResponse(ExceptionCode.INVALID_ACCESS_TOKEN_EXCEPTION, err.getMessage());
	}
}
