package me.r3tnu.lab2web.pointValidator;

import me.r3tnu.lab2web.PointWrapper;

import java.util.Arrays;

public class PointValidatorImp implements PointValidator {

    private static boolean isInArray(Float[] arr, float toCheckValue) {
        return Arrays.asList(arr).contains(toCheckValue);
    }
    @Override
    public boolean valid(PointWrapper point) {
        boolean valid = point.getX() >= -5 && point.getX() <= 3;
        valid = valid && point.getY() >= -5 && point.getY() <= 5;
        valid = valid && isInArray(new Float[]{1f, 1.5f, 2f, 2.5f, 3f}, point.getR());
        return valid;
    }
}
