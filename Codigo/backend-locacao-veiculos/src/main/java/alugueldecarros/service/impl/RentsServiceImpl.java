package alugueldecarros.service.impl;

import alugueldecarros.models.Rents;
import alugueldecarros.models.RequestEntity.RentRequest;
import alugueldecarros.models.RequestEntity.VehiclesRequest;
import alugueldecarros.models.ResponseEntity.RentsResponse;
import alugueldecarros.models.ResponseEntity.VehiclesResponse;
import alugueldecarros.models.Vehicles;
import alugueldecarros.repository.RentsRepository;
import alugueldecarros.service.RentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.NonUniqueResultException;
import java.util.Optional;

@Service
public class RentsServiceImpl implements RentsService {
    @Autowired
    RentsRepository rentsRepository;
    @Override
    public RentsResponse createRent(RentRequest request) {
        Optional<Rents> rent = Optional.ofNullable(this.rentsRepository.findOneByIdRentAndDeletedAtIsNull(request.getIdRent()));

        if(!rent.isPresent()){
            return RentsResponse.fromRents(
                    this.rentsRepository.save(
                            RentRequest.toRents(request)
                    )
            );
        }else{
            throw new NonUniqueResultException("Veiculo ja cadastrado!");
        }
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
        return this.rentsRepository.findAllByDeletedAtIsNullOrderByIdRent(pages);
    }

    @Override
    public Page<Rents> listRentsByPageAndStatus(Pageable pages, String status) {

        return this.rentsRepository.findAllByStatusIgnoreCaseAndDeletedAtIsNull(pages,status);
    }

    @Override
    public Page<Rents> listRentsByUserAndPage(Pageable pages, Long idUser) {

        return this.rentsRepository.findAllByIdCreatorAndDeletedAtIsNullOrderByIdRent(pages,idUser);
    }

    @Override
    public Page<Rents> listRentsByPageAndStatusAndUser(Pageable pages, String status, Long idUser) {
        return this.rentsRepository.findAllByIdCreatorAndStatusIgnoreCaseAndDeletedAtIsNull(pages,idUser,status);
    }

    @Override
    public RentsResponse getRentById(Long idRent) {
        return RentsResponse.fromRents(this.rentsRepository.findOneByIdRentAndDeletedAtIsNull(idRent));
    }

    @Override
    public RentsResponse changeStatus(RentRequest request) {
        return null;
    }
}
