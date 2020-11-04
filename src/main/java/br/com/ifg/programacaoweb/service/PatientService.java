package br.com.ifg.programacaoweb.service;



import br.com.ifg.programacaoweb.model.entity.PatientEntity;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;
import java.util.List;

@ApplicationScoped
public class PatientService {
    public PatientEntity update(PatientEntity patientEntity) {
        PatientEntity patient = PatientEntity.findById(patientEntity.getId());
        if (patient == null) {
            throw new WebApplicationException("Patient with id of " + patientEntity.getId() + " does not exist.", Response.Status.NOT_FOUND);
        }
        patient.setFirstName(patientEntity.getFirstName());
        patient.setLastName(patientEntity.getLastName());
        patient.setMotherName(patientEntity.getMotherName());
        patient.setGenre(patientEntity.getGenre());
        patient.setBirthDate(patientEntity.getBirthDate());
        patient.setRg(patientEntity.getRg());
        patient.setCpf(patientEntity.getCpf());
        patient.setPublicPlace(patientEntity.getPublicPlace());
        patient.setComplement(patientEntity.getComplement());
        patient.setDistrict(patientEntity.getDistrict());
        patient.setCity(patientEntity.getCity());
        patient.setState(patientEntity.getState());

        return patient;
    }
    /**
     * This method is main purpose to show simple "Business" example
     * @param patient
     * @return
     */
    public boolean isPatientNameIsNotEmpty(PatientEntity patient) {
        return patient.getFirstName().isEmpty();

    }

    @Transactional
    public PatientEntity addCustomer(PatientEntity patientEntity){
        PatientEntity.persist(patientEntity);
        return patientEntity;
    }

    @Transactional
    public PatientEntity findById(PatientEntity patientEntity){
        patientEntity = PatientEntity.findById(patientEntity.id);
        return patientEntity;
    }


    @Transactional
    public List<PatientEntity> getByFirstName(PatientEntity patientEntity){
        List<PatientEntity> cList = PatientEntity.findByFirstName(patientEntity);
        return cList;
    }

    @Transactional
    public List<PatientEntity> getByFirstNameOrLastName(PatientEntity patientEntity){
        List<PatientEntity> cList = PatientEntity.findByFirstNameOrLastName(patientEntity);
        return cList;
    }

    @Transactional
    public PatientEntity getCustomerByRg(PatientEntity patientEntity){
        patientEntity = PatientEntity.findByRg(patientEntity);
        return patientEntity;
    }

    @Transactional
    public List<PatientEntity> listPatientUsers(){
        return PatientEntity.listAll();
    }

    @Transactional
    public PatientEntity deleteCustomer(PatientEntity patientEntity){
        patientEntity = PatientEntity.findById(patientEntity.id);
        PatientEntity.deleteById(patientEntity.id);
        return patientEntity;
    }

}
