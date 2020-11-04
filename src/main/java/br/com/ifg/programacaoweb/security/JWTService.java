package br.com.ifg.programacaoweb.security;

import br.com.ifg.programacaoweb.model.entity.UserEntity;
import org.eclipse.microprofile.jwt.Claims;
import org.jboss.logmanager.Logger;
import org.jose4j.jwt.JwtClaims;

import javax.enterprise.context.RequestScoped;
import java.util.Collections;
import java.util.UUID;

@RequestScoped
public class JWTService {

    public final static Logger LOGGER = Logger.getLogger(JWTService.class.getSimpleName());

    public String generateBeneficiarioToken(UserEntity userEntity) {
        return generateToken(userEntity.getUuid().toString(), userEntity.getEmail(), Permissions.USER);
    }
    public String generateUserToken(String id, String username) {
        return generateToken(id, username, Permissions.USER);
    }

    public String generateServiceToken(String serviceId, String serviceName) {
        return generateToken(serviceId,serviceName, Permissions.ADMIN);
    }

    public String generateToken(String subject, String name, String permissions) {
        try {
            JwtClaims jwtClaims = new JwtClaims();
            jwtClaims.setIssuer("https://localhost:8080"); // change to your company
            jwtClaims.setJwtId(UUID.randomUUID().toString());
            jwtClaims.setSubject(subject);
            jwtClaims.setClaim(Claims.upn.name(), subject);
            jwtClaims.setClaim(Claims.preferred_username.name(), name); //add more
            jwtClaims.setClaim(Claims.groups.name(), Collections.singletonList(permissions));
            jwtClaims.setAudience("using-jwt");
            jwtClaims.setExpirationTimeMinutesInTheFuture(60); // TODO specify how long do you need


            String token = TokenUtils.generateTokenString(jwtClaims);
            LOGGER.info("TOKEN generated: " + token);
            return token;
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }
}