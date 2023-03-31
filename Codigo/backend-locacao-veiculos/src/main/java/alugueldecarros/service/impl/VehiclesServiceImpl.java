package alugueldecarros.service.impl;

import alugueldecarros.controller.VehiclesController;
import alugueldecarros.models.RequestEntity.UserRequest;
import alugueldecarros.models.RequestEntity.VehiclesRequest;
import alugueldecarros.models.ResponseEntity.VehiclesResponse;
import alugueldecarros.models.Vehicles;
import alugueldecarros.models.dto.UserDto;
import alugueldecarros.service.VehiclesService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class VehiclesServiceImpl implements VehiclesService {


    @Override
    public VehiclesResponse create(VehiclesRequest request) {
        return null;
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
        return null;
    }

    @Override
    public Page<Vehicles> listVehiclesByPageAndName(Pageable pages, String name) {
        return null;
    }

    @Override
    public VehiclesResponse getVehicleById(Long idVehicle) {
        return null;
    }
}
