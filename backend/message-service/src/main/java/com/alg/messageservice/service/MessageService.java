package com.alg.messageservice.service;


import com.alg.messageservice.model.Messages;
import com.alg.messageservice.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MessageService {

    private final MessageRepository messageRepository;

    @Autowired
    public MessageService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    public List<Messages> getAllMessages() {
        return messageRepository.findAll();
    }

    public Optional<Messages> getMessageById(Long id) {
        return messageRepository.findById(id);
    }

    public Messages saveMessage(Messages messages) {
        return messageRepository.save(messages);
    }

    public void deleteMessage(Long id) {
        messageRepository.deleteById(id);
    }

    public Messages createMessage(Messages messages) {
        messages.setId(null);
        return messageRepository.save(messages);
    }

    public Messages updateMessage(Long id, Messages messages) {
        if (!messageRepository.existsById(id)) {
            throw new RuntimeException("Messages not found with id: " + id);
        }
        messages.setId(id);
        return messageRepository.save(messages);
    }
}
