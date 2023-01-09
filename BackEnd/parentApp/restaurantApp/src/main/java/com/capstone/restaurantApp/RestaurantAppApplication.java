package com.capstone.restaurantApp;

import com.capstone.restaurantApp.filter.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@EnableEurekaClient
@SpringBootApplication
public class RestaurantAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestaurantAppApplication.class, args);
	}
	@Bean
	public FilterRegistrationBean jwtFilter(){
		//return list of intercepted urls with defined Jwt filter class
		FilterRegistrationBean frb=new FilterRegistrationBean<>();
		frb.setFilter(new JwtFilter());
		frb.addUrlPatterns("/foodie-app/restaurant-app/v1/add-restaurant/*","/foodie-app/restaurant-app/v1/get-restaurant-by-emailid/*","/foodie-app/restaurant-app/v1/delete-restaurant-by-gstno/*");
		return frb;
	}
//	@Bean
//	public FilterRegistrationBean filterRegistrationBean(){
//		final CorsConfiguration config=new CorsConfiguration();
//		config.setAllowCredentials(true);
//		config.addAllowedOrigin("http://localhost:4200");
//		config.addAllowedHeader("*");
//		config.addAllowedMethod("*");
//
//		final UrlBasedCorsConfigurationSource source=new UrlBasedCorsConfigurationSource();
//		source.registerCorsConfiguration("/**",config);
//
//		FilterRegistrationBean bean=new FilterRegistrationBean(new CorsFilter(source));
//		bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
//		return bean;
//
//	}

}
