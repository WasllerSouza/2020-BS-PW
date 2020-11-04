package br.com.ifg.programacaoweb.model.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import io.quarkus.panache.common.Parameters;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Table(name="paciente")
public class PatientEntity extends PanacheEntityBase {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id", nullable = false)
	@Getter@Setter
	public Long id;

	@Column(name="nome", nullable = false)
	@Getter@Setter
	public String firstName;

	@Column(name="sobrenome", nullable = false)
	@Getter@Setter
	public String lastName;

	@Column(name="mae", nullable = false)
	@Getter@Setter
	public String motherName;

	@Column(name="sexo", nullable = false)
	@Getter@Setter
	public String genre;

	@Column(name="data_nasc", nullable = false)
	@Getter@Setter
	public String birthDate;

	@Column(name="rg", nullable = false)
	@Getter@Setter
	public String rg;

	@Column(name="cpf", nullable = false)
	@Getter@Setter
	public String cpf;

	@Column(name="endereco", nullable = false)
	@Getter@Setter
	public String publicPlace;

	@Column(name="complemento", nullable = false)
	@Getter@Setter
	public String complement;

	@Column(name="bairro", nullable = false)
	@Getter@Setter
	public String district;

	@Column(name="cidade", nullable = false)
	@Getter@Setter
	public String city;

	@Column(name="estado", nullable = false)
	@Getter@Setter
	public String state;

	public static List<PatientEntity> findByFirstName(PatientEntity user){
		List<PatientEntity> customerList = list("nome",  user.getFirstName());
		return customerList;
	}

	public static List<PatientEntity> findByFirstNameOrLastName(PatientEntity user){
		List<PatientEntity> customerList = list("Nome = :firstName or sobreNome = :lastName",
				Parameters.with("firstName", user.getFirstName())
						.and("lastName", user.getLastName()));
		return customerList;
	}
	public static PatientEntity findByRg(PatientEntity user){
		user = PatientEntity.find("rg", user.getRg()).firstResult();
		return user;
	}
	public static PatientEntity findByCpf(PatientEntity user){
		user = PatientEntity.find("cpf", user.getCpf()).firstResult();
		return user;
	}

}
