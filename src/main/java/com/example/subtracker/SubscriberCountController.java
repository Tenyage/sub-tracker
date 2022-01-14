package com.example.subtracker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SubscriberCountController {
    @Autowired
    private SubscriberCountService service;
    @GetMapping("/{id}")
    public int getSubscriberCount(@PathVariable("id") String channelID){
        return service.getSubscriberCount(channelID);
    }
}
