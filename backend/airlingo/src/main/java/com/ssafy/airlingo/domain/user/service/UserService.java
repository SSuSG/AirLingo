package com.ssafy.airlingo.domain.user.service;

import java.util.List;

import com.ssafy.airlingo.domain.language.dto.response.RecordResponseDto;
import com.ssafy.airlingo.domain.user.dto.request.CreateUserAccountRequestDto;
import com.ssafy.airlingo.domain.user.dto.request.LoginRequestDto;
import com.ssafy.airlingo.domain.user.dto.response.LoginResponseDto;
import com.ssafy.airlingo.domain.user.dto.response.UserResponseDto;
import com.ssafy.airlingo.domain.user.entity.User;

import jakarta.servlet.http.HttpServletResponse;

public interface UserService {
	// 회원가입 관련
	Long createUserAccount(CreateUserAccountRequestDto createUserAccountRequestDto);

	// 로그인 관련
	LoginResponseDto login(LoginRequestDto loginRequestDto, HttpServletResponse response);

	User findUserByUserLoginId(String userLoginId);

	void setToken(User loginUser, HttpServletResponse response);

	UserResponseDto findUserByUserId(Long userId);

	List<RecordResponseDto> findByUserId(Long userId);
}
