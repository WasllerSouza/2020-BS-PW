package br.com.ifg.programacaoweb.rest;

import br.com.ifg.programacaoweb.model.entity.PatientEntity;
import br.com.ifg.programacaoweb.service.PatientService;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;


@Path("/patient")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Transactional
@ApplicationScoped
public class PatientRest {

	@Inject
	PatientService patientService;

	@GET
	public Iterable<PatientEntity> findAll() {
		return patientService.listPatientUsers();
	}

	@GET
	@Path("/{id}")
	public PatientEntity findById(@PathParam("id") Long id){
		PatientEntity patientEntity = new PatientEntity();
		patientEntity.id = id;
		patientEntity = patientService.findById(patientEntity);
		return patientEntity;
	}

	@GET
	@Path("/rg/{rg}")
	public PatientEntity findByRg(@PathParam("rg") String rg){
		PatientEntity customerEntity = new PatientEntity();
		customerEntity.setRg(rg);
		customerEntity = patientService.getCustomerByRg(customerEntity);
		return customerEntity;
	}

	@GET
	@Path("/primeiroNome/{primeiroNome}")
	public List<PatientEntity> findByFirstName(@PathParam("primeiroNome") String name){
		PatientEntity patientEntity = new PatientEntity();
		patientEntity.setFirstName(name);
		List<PatientEntity> patient = patientService.getByFirstName(patientEntity);
		return patient;
	}

	@GET
	@Path("/primeiroNome/{primeiroNome}/sobreNome/{sobreNome}")
	public List<PatientEntity> findByFirstNameOrLastName(@PathParam("primeiroNome") String primeiroNome,
                                                         @PathParam("sobreNome") String sobreNome){
		PatientEntity customerEntity = new PatientEntity();
		customerEntity.setFirstName(primeiroNome);
		customerEntity.setLastName(sobreNome);
		List<PatientEntity> customers = patientService.getByFirstNameOrLastName(customerEntity);
		return customers;
	}

	@POST
	@Transactional
	public Response create(PatientEntity user) {
		PatientEntity.persist(user);
		return Response.ok(user).status(201).build();
	}

	@PUT
	@Path("/update")
	public Response update( PatientEntity user) {
		if (patientService.isPatientNameIsNotEmpty(user)) {
			return Response.ok("Patient was not found").type(MediaType.APPLICATION_JSON_TYPE).build();
		}
		PatientEntity patientEntity = patientService.update(user);
		return Response.ok(patientEntity).build();
	}

	@POST
	@Path("/delete/{id}")
	public PatientEntity deleteById(@PathParam("id") Long id){
		PatientEntity customerEntity = new PatientEntity();
		customerEntity.setId(id);
		customerEntity = patientService.findById(customerEntity);
		customerEntity = patientService.deleteCustomer(customerEntity);
		return customerEntity;
	}



}
