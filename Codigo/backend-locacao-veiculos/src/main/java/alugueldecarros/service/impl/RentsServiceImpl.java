package alugueldecarros.service.impl;

import alugueldecarros.models.Rents;
import alugueldecarros.models.RequestEntity.RentRequest;
import alugueldecarros.models.ResponseEntity.RentsResponse;
import alugueldecarros.service.RentsService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class RentsServiceImpl implements RentsService {

    @Override
    public RentsResponse createRent(RentRequest request) {
        return null;
    }

    @Override
    public RentsResponse editRent(RentRequest request) {
        return null;
    }

    @Override
    public RentsResponse deleteRent(Long idRent) {
        return null;
    }

    @Override
    public RentsResponse cancelRentLoggedUser() {
        return null;
    }

    @Override
    public Page<Rents> listRentsByPage(Pageable pages) {
        return null;
    }

    @Override
    public Page<Rents> listRentsByPageAndStatus(Pageable pages, String status) {
        return null;
    }

    @Override
    public Page<Rents> listRentsByUserAndPage(Pageable pages, Long idUser) {
        return null;
    }

    @Override
    public Page<Rents> listRentsByPageAndStatusAndUser(Pageable pages, String status, Long idUser) {
        return null;
    }

    @Override
    public RentsResponse getRentById(Long idRent) {
        return null;
    }

    @Override
    public RentsResponse changeStatus(RentRequest request) {
        return null;
    }
}
