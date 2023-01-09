package com.stackroute.apiGateway.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
    @Bean
    public RouteLocator getRRoutes(RouteLocatorBuilder builder){
        return builder.routes()
                .route(p->p
                        .path("/foodie-app/user-app/v1/**")
                        .uri("http://localhost:1111/*"))
                .route(p->p
                        .path("/foodie-app/user-auth-app/v1/**")
                        .uri("http://localhost:2221/*"))
                .route(p->p
                        .path("/foodie-app/restaurant-app/v1/**")
                        .uri("http://localhost:3333/*"))
                .route(p->p
                        .path("/foodie-app/user-favourite-restaurant-app/v1/**")
                        .uri("http://localhost:4444/*"))
                .route(p->p
                        .path("/foodie-app/user-order-app/v1/**")
                        .uri("http://localhost:5555/*"))
                .route(p->p
                        .path("/foodie-app/restro-review-app/v1/**")
                        .uri("http://localhost:6666/*"))
                .route(p->p
                        .path("/foodie-app/profile-picture-app/v1/**")
                        .uri("http://localhost:7777/*"))
                .route(p->p
                        .path("/foodie-app/restro-profile-picture-app/v1/**")
                        .uri("http://localhost:8888/*"))
                .route(p->p
                        .path("/foodie-app/email-service-app/v1/**")
                        .uri("http://localhost:9999/*"))

                .build();
    }
}
