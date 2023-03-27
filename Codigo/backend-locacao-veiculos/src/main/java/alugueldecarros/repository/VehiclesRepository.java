package alugueldecarros.repository;

import alugueldecarros.models.Address;
import alugueldecarros.models.Vehicles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehiclesRepository extends JpaRepository<Vehicles,Long> {

}
