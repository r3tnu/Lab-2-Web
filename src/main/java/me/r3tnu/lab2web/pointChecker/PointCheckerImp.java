package me.r3tnu.lab2web.pointChecker;

import me.r3tnu.lab2web.PointWrapper;

public class PointCheckerImp implements PointChecker{

    @Override
    public boolean check(PointWrapper point) {
        boolean topLeft = (point.getX() < 0 && point.getY() > 0 &&
                point.getY() < Math.sqrt(Math.pow(point.getR(), 2) - Math.pow(point.getX(), 2)));

        boolean bottomLeft = (point.getX() < 0 && point.getY() < 0 &&
                point.getX() > -point.getR()/2 && point.getY() > -point.getR());

        boolean bottomRight = (point.getX() > 0 && point.getY() < 0 &&
                point.getY() > (float) point.getX() /2 - point.getR()/2);

        return topLeft || bottomLeft || bottomRight;
    }
}
