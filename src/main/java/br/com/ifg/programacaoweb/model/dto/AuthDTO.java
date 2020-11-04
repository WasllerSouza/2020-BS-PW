package br.com.ifg.programacaoweb.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
public class AuthDTO {
    @Getter
    @Setter
    private String accessToken;
    @Getter
    @Setter
    private String message;

}
