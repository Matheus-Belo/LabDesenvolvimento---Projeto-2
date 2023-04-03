package alugueldecarros.service.impl;

import alugueldecarros.controller.VehiclesController;
import alugueldecarros.models.RequestEntity.UserRequest;
import alugueldecarros.models.RequestEntity.VehiclesRequest;
import alugueldecarros.models.ResponseEntity.VehiclesResponse;
import alugueldecarros.models.Vehicles;
import alugueldecarros.models.dto.UserDto;
import alugueldecarros.repository.VehiclesRepository;
import alugueldecarros.service.VehiclesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.NonUniqueResultException;
import java.util.Optional;

@Service
public class VehiclesServiceImpl implements VehiclesService {
    @Autowired
    VehiclesRepository vehiclesRepository;

    @Override
    public VehiclesResponse create(VehiclesRequest request) {

        Optional<Vehicles> vehicle = Optional.ofNullable(
                this.vehiclesRepository.findOneByLicensePlateAndDeletedAtIsNull(request.getLicensePlate())
        );

        if(!vehicle.isPresent()){
            return VehiclesResponse.fromVehicles(
                    this.vehiclesRepository.save(
                            VehiclesRequest.toVehicles(request)
                    )
            );
        }else{
            throw new NonUniqueResultException("Veiculo ja cadastrado!");
        }
    }

    @Override
    public VehiclesResponse editVehicle(VehiclesRequest request) {
        return null;
    }

    @Override
    public VehiclesResponse deleteVehicle(Long idVehicle) {
        return null;
    }

    @Override
    public Page<Vehicles> listVehiclesByPage(Pageable pages) {

        return  this.vehiclesRepository.findAllByDeletedAtIsNullOrderByName(pages);
    }

    @Override
    public Page<Vehicles> listVehiclesByPageAndName(Pageable pages, String name) {

        return this.vehiclesRepository.findAllByNameAndDeletedAtIsNullOrderByName(name,pages);
    }

    @Override
    public VehiclesResponse getVehicleById(Long idVehicle) {
        return VehiclesResponse.fromVehicles(
                this.vehiclesRepository.findOneByIdVehicleAndDeletedAtIsNull(idVehicle)
        );
    }
}
