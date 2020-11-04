package br.com.ifg.programacaoweb.model.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Entity
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Table(name="usuario")
public class UserEntity extends PanacheEntityBase {

	@Id
	@GeneratedValue(generator = "UUID")
	@GenericGenerator(
			name = "UUID",
			strategy = "org.hibernate.id.UUIDGenerator"
			)
	@Getter@Setter
	private UUID uuid;

	@Getter@Setter
	@Column(name="nome", nullable = false)
	private String name;

	@Getter@Setter
	@Column(name="email",nullable = false, unique = true)
	private String email;

	@Getter@Setter
	@Column(name="senha",nullable = false)
	private String password;

	@Getter@Setter
	@Column(name = "permissao",nullable = false)
	private String permission;

}
