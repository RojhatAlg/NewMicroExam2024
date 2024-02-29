package com.alg.feedbackservice.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String messageToAdmin;
    private String email;

    public Feedback() {
    }

    public Feedback(Long id, String messageToAdmin, String email) {
        this.id = id;
        this.messageToAdmin = messageToAdmin;
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMessageToAdmin() {
        return messageToAdmin;
    }

    public void setMessageToAdmin(String messageToAdmin) {
        this.messageToAdmin = messageToAdmin;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
