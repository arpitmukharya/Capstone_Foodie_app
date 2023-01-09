package com.capstone.restaurantApp.filter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtFilter extends GenericFilterBean {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        //check request header:OPTIONS->skip fitering
        // if header with bearer token -> check the token:proccess the request
        //else throw exception
        HttpServletRequest request=(HttpServletRequest) servletRequest;
        HttpServletResponse response=(HttpServletResponse) servletResponse;
        String authHeader=request.getHeader("authorization");
        if ("OPTIONS".equals(request.getMethod())){
            response.setStatus(HttpServletResponse.SC_OK);
            filterChain.doFilter(request,response);
        } else if (authHeader==null || !authHeader.startsWith("Bearer")) {
            //if authHeader not found/header found but token not bearer type

            throw new ServletException("Missing of Invalid Expression");
        }
        //authHeader found with proper bearer token

        String token=authHeader.substring(7);  //Bearer acabadj =>acabadj
        Claims claims= Jwts.parser().setSigningKey("mysecurekey").parseClaimsJws(token).getBody();
        System.out.println("Claims in filter:"+ claims);
        request.setAttribute("claims",claims);
        filterChain.doFilter(request,response);
    }
}
