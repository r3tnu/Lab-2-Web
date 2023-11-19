<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div class="form-container">

<form id="request-form">

<!-- Form input -->
<b>Point:</b>

    <br>

<!-- X input -->
<label for="X">
    X [-3; 5]: <br>
    <select name="X" id="X" class="x-input">
        <option value="-3">-3</option>
        <option value="-2">-2</option>
        <option value="-1">-1</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
</label>

    <br>


<!-- Y input -->
<label for="Y">
    Y [-5, 3]: <br>
    <input type="text" value="0" name="Y" id="Y" class="y-input">
</label>

    <br>

<!-- Radius input -->
<b>Radius:</b>

    <br>


<label for="R">
    R [2, 5]: <br>
    <input type="text" value="2" name="R" id="R" class="r-input">
</label>

    <br>


<!-- Submit -->
<input type="submit" class="submit-button">

</form>

</div>