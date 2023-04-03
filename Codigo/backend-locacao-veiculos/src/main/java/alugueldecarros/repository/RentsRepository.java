package alugueldecarros.repository;

import alugueldecarros.models.Address;
import alugueldecarros.models.Rents;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RentsRepository extends JpaRepository<Rents,Long> {

    Rents findOneByIdRentAndDeletedAtIsNull(Long idRent);
}
