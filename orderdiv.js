module.exports= (item)=>{
  return `


          <td class="o_bg-light o_px-xs" align="center" style="background-color: #dbe5ea;padding-left: 8px;padding-right: 8px;">
            <!--[if mso]><table width="632" cellspacing="0" cellpadding="0" border="0" role="presentation"><tbody><tr><td><![endif]-->
            <table class="o_block" width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="max-width: 632px;margin: 0 auto;">
              <tbody>
                <tr>
                  <td class="o_re o_bg-white o_px o_pt" align="center" style="font-size: 0;vertical-align: top;background-color: #ffffff;padding-left: 16px;padding-right: 16px;padding-top: 16px;">
                    <!--[if mso]><table cellspacing="0" cellpadding="0" border="0" role="presentation"><tbody><tr><td width="400" align="left" valign="top" style="padding: 0px 8px;"><![endif]-->
                    <div class="o_col o_col-4 o_col-full" style="display: inline-block;vertical-align: top;width: 100%;max-width: 400px;">
                      <div class="o_px-xs o_sans o_text-xs o_left" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 14px;line-height: 21px;text-align: left;padding-left: 8px;padding-right: 8px;">
                        <p class="o_text o_text-secondary" style="font-size: 16px;line-height: 24px;color: #424651;margin-top: 0px;margin-bottom: 0px;"><strong>${item.name}</strong></p>
                      </div>
                    </div>
                    <!--[if mso]></td><td width="100" align="center" valign="top" style="padding: 0px 8px;"><![endif]-->
                    <div class="o_col o_col-1 o_col-full" style="display: inline-block;vertical-align: top;width: 100%;max-width: 100px;">
                      <div class="o_px-xs o_sans o_text o_center o_xs-left" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 16px;line-height: 24px;text-align: center;padding-left: 8px;padding-right: 8px;">
                        <p class="o_text-secondary" style="color: #424651;margin-top: 0px;margin-bottom: 0px;"><span class="o_hide-lg" style="display: none;font-size: 0;max-height: 0;width: 0;line-height: 0;overflow: hidden;mso-hide: all;visibility: hidden;">Quantity:&nbsp; </span>${item.qty}</p>
                      </div>
                    </div>
                    <!--[if mso]></td><td width="100" align="right" valign="top" style="padding: 0px 8px;"><![endif]-->
                    <div class="o_col o_col-1 o_col-full" style="display: inline-block;vertical-align: top;width: 100%;max-width: 100px;">
                      <div class="o_px-xs o_sans o_text o_right o_xs-left" style="font-family: Helvetica, Arial, sans-serif;margin-top: 0px;margin-bottom: 0px;font-size: 16px;line-height: 24px;text-align: right;padding-left: 8px;padding-right: 8px;">
                          <p class="o_text-secondary" style="color: #424651;margin-top: 0px;margin-bottom: 0px;"><span class="o_hide-lg" style="display: none;font-size: 0;max-height: 0;width: 0;line-height: 0;overflow: hidden;mso-hide: all;visibility: hidden;">Price:&nbsp; </span>Rs ${item.price}</p>
                      </div>
                    </div>
                    <!--[if mso]></td></tr><tr><td colspan="3" style="padding: 0px 8px;"><![endif]-->
                    <div class="o_px-xs" style="padding-left: 8px;padding-right: 8px;">
                      <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                        <tbody>
                          <tr>
                            <td class="o_re o_bb-light" style="font-size: 16px;line-height: 16px;height: 16px;vertical-align: top;border-bottom: 1px solid #d3dce0;">&nbsp; </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!--[if mso]></td></tr></table><![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
            <!--[if mso]></td></tr></table><![endif]-->
          </td>


  `
}