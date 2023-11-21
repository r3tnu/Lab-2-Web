package me.r3tnu.lab2web;

import java.util.Objects;

public class PointWrapper {
    private int x;
    private float y;
    private float r;
    private boolean result = false;

    public PointWrapper() {}

    public PointWrapper(int x, float y, float r, boolean result) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.result = result;
    }

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public float getY() {
        return y;
    }

    public void setY(float y) {
        this.y = y;
    }

    public float getR() {
        return r;
    }

    public void setR(float r) {
        this.r = r;
    }

    public boolean getResult() {
        return result;
    }

    public void setResult(boolean result) {
        this.result = result;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PointWrapper that = (PointWrapper) o;
        return x == that.x && Float.compare(y, that.y) == 0 && Float.compare(r, that.r) == 0 && result == that.result;
    }

    @Override
    public int hashCode() {
        return Objects.hash(x, y, r, result);
    }

    @Override
    public String toString() {
        return "ResultsWrapper{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", result=" + result +
                '}';
    }
}
