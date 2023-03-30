package alugueldecarros.models.RequestEntity;

import alugueldecarros.enums.OrderStatusEnum;
import alugueldecarros.models.Rents;
import alugueldecarros.models.User;
import alugueldecarros.models.Vehicles;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
public class RentRequest {

    private Long idRent;

    @NotNull(message = "Campo idCreator não pode ser nulo")
    @NotEmpty(message = "Campo idCreator não pode ser vazio")
    private User idCreator;

    @NotNull(message = "Campo idAttendant não pode ser nulo")
    @NotEmpty(message = "Campo idAttendant não pode ser vazio")
    private User idAttendant;

    @NotNull(message = "Campo idAttendant não pode ser nulo")
    @NotEmpty(message = "Campo idAttendant não pode ser vazio")
    private Vehicles idVehicle;


    private String status;

    @NotNull(message = "Campo withdrawDate não pode ser nulo")
    @NotEmpty(message = "Campo withdrawDate não pode ser vazio")
    private Date withdrawDate;

    @NotNull(message = "Campo returnDate não pode ser nulo")
    @NotEmpty(message = "Campo returnDate não pode ser vazio")
    private Date returnDate;


    private Integer price;


    private String paymentStatus;


    private Date createdAt;

    private Date deletedAt;


    public RentRequest() {
    }

    public static Rents toRents (RentRequest request){
        return new Rents(

            request.idCreator,
            request.idAttendant,
            request.idVehicle,
            request.status != null ? request.status : OrderStatusEnum.CREATED.getCode(),
            request.withdrawDate,
            request.returnDate,
            request.price,
            request.paymentStatus,
            new Date(),
            null
        );
    }
}
