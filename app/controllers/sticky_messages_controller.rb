class StickyMessagesController < ApplicationController

  def create
    @sticky_item
    @organization
    if params[:sticky_type] == "organization"
      @sticky_item = Organization.find(params[:sticky_type_id])
      @organization = @sticky_item
    else
      @sticky_item = Project.find(params[:sticky_type_id])
      @organization = @sticky_item.organization
    end
    @sticky_message = @sticky_item.sticky_messages.build(sticky_message_params)
    @sticky_message.user_id = current_user.id

    if @sticky_message.save
      respond_to do |format|
        format.js
        end
      flash[:success] = "Message saved"
    else
      flash.now[:error] = "Message not saved"
    end
  end

  def destroy
    @sticky_message = StickyMessage.find(params[:id])
    @sticky_message.destroy
    respond_to do |format|
      format.js
    end
  end



  private
  def sticky_message_params
    params.require(:sticky_message).permit(:title, :body)
  end


end