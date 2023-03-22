package alugueldecarros.enums;

import java.io.Serializable;


public enum RolesEnum implements Serializable {
    ADMIN("ADMIN"),
    DEV("DEVELOPER"),
    USER("USUARIO"),
    DEF("DEFESACIVIL");

    private final String code;

    RolesEnum(String code) {
        this.code = code;
    }

    public static RolesEnum getByCd(String cd) {
        for(RolesEnum e : values()) {
            if(e.code.equals(cd)) return e;
        }
        return null;
    }

    public String getCode() {
        return code;
    }
}

