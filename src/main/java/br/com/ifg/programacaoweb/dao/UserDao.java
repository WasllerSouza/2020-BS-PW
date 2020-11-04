package br.com.ifg.programacaoweb.dao;

import br.com.ifg.programacaoweb.model.entity.UserEntity;

import javax.enterprise.context.RequestScoped;

@RequestScoped
public class UserDao {

	public UserEntity getUserAndPassword(String email, String senha) {
		return UserEntity.find("email=?1 and password=?2", email, senha).firstResult();
	}
	public UserEntity getUser(String email) {
		return UserEntity.find("email=?1", email).firstResult();
	}

}
