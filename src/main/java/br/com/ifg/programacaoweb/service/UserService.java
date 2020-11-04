package br.com.ifg.programacaoweb.service;

import br.com.ifg.programacaoweb.dao.UserDao;
import br.com.ifg.programacaoweb.model.entity.UserEntity;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;

@RequestScoped
public class UserService {
    @Inject
    UserDao dao;

    public UserEntity getUser(String email) {
        return dao.getUser(email);
    }
    public UserEntity getUserAndPassword(String email, String senha) {
        return dao.getUserAndPassword(email, senha);
    }



}
