package br.com.ifg.programacaoweb.rest;

import br.com.ifg.programacaoweb.model.entity.UserEntity;
import br.com.ifg.programacaoweb.model.dto.AuthDTO;
import br.com.ifg.programacaoweb.security.JWTService;
import br.com.ifg.programacaoweb.service.UserService;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.persistence.PersistenceException;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.SecurityContext;

@Path("/auth")
@RequestScoped
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class AuthRest {

    @Inject
    JWTService jwtService;
    @Inject
    UserService userService;
    @Context
    SecurityContext securityContext;

    @POST
    @Path("/register")
    @Transactional
    public UserEntity register(UserEntity userEntity) {
        userEntity.persistAndFlush();
        return userEntity;
    }

    @POST
    @Path("/login")
    @Transactional
    public AuthDTO login(UserEntity usuario) throws PersistenceException {
        UserEntity beneficiario = userService.getUserAndPassword(usuario.getEmail(), usuario.getPassword());
        if (beneficiario == null)
            return new AuthDTO(null, "Ops... Não foi possivel efetuar o seu login, Usuario e/ou senha incorretos");
        else
        return new AuthDTO(jwtService.generateBeneficiarioToken(beneficiario), "Login efetuado com sucesso.");
    }

}