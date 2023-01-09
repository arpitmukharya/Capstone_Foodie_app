package com.capstone.user.rabbitmq;

import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Producer {
    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Autowired
    private DirectExchange directExchange;

    public void sentDtoToQueue(ProfileDTO profileDTO){
        rabbitTemplate.convertAndSend(directExchange.getName(),"user_routing",profileDTO);
    }
}
